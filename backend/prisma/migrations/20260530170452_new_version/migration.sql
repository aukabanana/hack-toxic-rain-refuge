-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "riskLevel" TEXT NOT NULL DEFAULT 'UNKNOWN',
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "urgency" TEXT NOT NULL DEFAULT 'LOW',
    "communityId" TEXT NOT NULL,
    "targetMarkerId" TEXT,
    "resourceId" TEXT,
    "createdById" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Mission_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Mission_targetMarkerId_fkey" FOREIGN KEY ("targetMarkerId") REFERENCES "MapMarker" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Mission_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Mission_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Mission" ("communityId", "createdAt", "createdById", "id", "resourceId", "riskLevel", "targetMarkerId", "title", "updatedAt", "urgency") SELECT "communityId", "createdAt", "createdById", "id", "resourceId", "riskLevel", "targetMarkerId", "title", "updatedAt", "urgency" FROM "Mission";
DROP TABLE "Mission";
ALTER TABLE "new_Mission" RENAME TO "Mission";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
