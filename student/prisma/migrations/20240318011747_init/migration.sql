-- CreateTable
CREATE TABLE `tbl_stu` (
    `s_num` VARCHAR(191) NOT NULL,
    `s_name` VARCHAR(191) NOT NULL,
    `s_dept` VARCHAR(191) NOT NULL,
    `s_grade` VARCHAR(191) NOT NULL,
    `s_tel` VARCHAR(191) NOT NULL,
    `s_addr` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`s_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_sub` (
    `s_code` VARCHAR(191) NOT NULL,
    `s_sub` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`s_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_stu_sub` (
    `r_snum` VARCHAR(191) NOT NULL,
    `r_scode` VARCHAR(191) NOT NULL,
    `result` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`r_snum`, `r_scode`, `result`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_stu_sub` ADD CONSTRAINT `tbl_stu_sub_r_snum_fkey` FOREIGN KEY (`r_snum`) REFERENCES `tbl_stu`(`s_num`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_stu_sub` ADD CONSTRAINT `tbl_stu_sub_r_scode_fkey` FOREIGN KEY (`r_scode`) REFERENCES `tbl_sub`(`s_code`) ON DELETE RESTRICT ON UPDATE CASCADE;
