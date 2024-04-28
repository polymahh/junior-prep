-- CreateTable
CREATE TABLE "TimeSpent" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TimeSpent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TimeSpent_createdAt_userId_key" ON "TimeSpent"("createdAt", "userId");

-- AddForeignKey
ALTER TABLE "TimeSpent" ADD CONSTRAINT "TimeSpent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
