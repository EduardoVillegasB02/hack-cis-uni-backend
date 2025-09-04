-- CreateTable
CREATE TABLE "public"."Education" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "initial" TEXT,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Enrollment" (
    "id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Exterpise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Exterpise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description_initial" TEXT NOT NULL,
    "description_final" TEXT,
    "github" TEXT,
    "video_pitch" TEXT,
    "presentation" TEXT,
    "demo" TEXT,
    "documentation" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT,
    "social" TEXT,
    "background" TEXT,
    "education_id" TEXT NOT NULL,
    "exterpise_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Enrollment" ADD CONSTRAINT "Enrollment_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Enrollment" ADD CONSTRAINT "Enrollment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Team" ADD CONSTRAINT "Team_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_education_id_fkey" FOREIGN KEY ("education_id") REFERENCES "public"."Education"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_exterpise_id_fkey" FOREIGN KEY ("exterpise_id") REFERENCES "public"."Exterpise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
