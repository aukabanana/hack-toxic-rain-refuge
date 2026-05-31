import "dotenv/config";
import express, { type Request, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import zod from "zod";
import prisma from "./lib/prisma.js";
import authrouter from "./modules/auth/routers/auth.routes.js";
import commurouter from './modules/dashboard/routers/dashboard.route.js'

import communityRouter from "./modules/communities/routers/community.routes.js";
import mapRouter from "./modules/map/routers/map.routes.js";

const app = express();
const port = process.env.PORT;

if (!port) {
  throw new Error("PORT is missing in your .env file");
}

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(morgan("dev"));
app.use(('/auth'), authrouter)
app.use(commurouter)

app.use('/api/communities', communityRouter)
app.use('/api/map', mapRouter)

const CreateMissionSchema = zod.object({
  title: zod.string().min(3),
  riskLevel: zod.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL", "UNKNOWN"]),
  communityId: zod.string()
});

app.get("/", (_req: Request, res: Response) => {
  return res.status(200).send("Connected, Welcome to Toxic Rain Refuge Backend 👾👾");
});

app.get("/api/missions", async (_req: Request, res: Response) => {
  try {
    const missions = await prisma.mission.findMany({
      orderBy: { createdAt: "desc" },
      include: { community: true, targetMarker: true, resource: true, createdBy: true }
    });
    return res.status(200).json(missions);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch missions" });
  }
});

app.post("/api/missions", async (req: Request, res: Response) => {
  try {
    const validatedData = CreateMissionSchema.parse(req.body);
    const newMission = await prisma.mission.create({
      data: {
        title: validatedData.title,
        riskLevel: validatedData.riskLevel,
        community: {
          connectOrCreate: {
            where: { id: validatedData.communityId },
            create: { id: validatedData.communityId, name: "Refuge Camp 123" }
          }
        }
      },
    });
    return res.status(201).json(newMission);
  } catch (error) {
    if (error instanceof zod.ZodError) return res.status(400).json({ errors: error.issues });
    return res.status(500).json({ error: "Failed to create mission" });
  }
});

app.patch("/api/missions/:id", async (req: Request, res: Response) => {
  try {
    const missionId = req.params.id as string;
    const { isCompleted, riskLevel } = req.body;
    const updateData: any = {};
    if (isCompleted !== undefined) updateData.isCompleted = isCompleted;
    if (riskLevel !== undefined) updateData.riskLevel = riskLevel;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "No fields to update provided" });
    }

    const updatedMission = await prisma.mission.update({
      where: { id: missionId },
      data: updateData,
    });

    return res.status(200).json(updatedMission);
  } catch (error) {
    console.error("Error updating mission:", error);
    return res.status(500).json({ error: "Failed to update mission" });
  }
});

app.delete("/api/missions/:id", async (req: Request, res: Response) => {
  try {
    const missionId = req.params.id as string;
    const mission = await prisma.mission.findUnique({ where: { id: missionId } });
    if (!mission) return res.status(404).json({ message: "Mission not found" });
    await prisma.mission.delete({ where: { id: missionId } });
    return res.status(200).json({ message: "Mission deleted successfully", id: missionId });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete mission" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});