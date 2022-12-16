-- CreateTable
CREATE TABLE `Banner` (
    `ma_banner` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_phim` INTEGER NULL,
    `hinh_anh` VARCHAR(100) NULL,

    INDEX `ma_phim`(`ma_phim`),
    PRIMARY KEY (`ma_banner`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CumRap` (
    `ma_cup_rap` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_cum_rap` VARCHAR(20) NULL,
    `dia_chi` VARCHAR(100) NULL,
    `ma_he_thong_rap` INTEGER NULL,

    INDEX `ma_he_thong_rap`(`ma_he_thong_rap`),
    PRIMARY KEY (`ma_cup_rap`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DatVe` (
    `tai_khoang` INTEGER NULL,
    `ma_lich_chieu` INTEGER NULL,
    `ma_ghe` INTEGER NULL,

    INDEX `ma_ghe`(`ma_ghe`),
    INDEX `ma_lich_chieu`(`ma_lich_chieu`),
    INDEX `tai_khoang`(`tai_khoang`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ghe` (
    `ma_ghe` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_ghe` VARCHAR(20) NULL,
    `loai_ghe` VARCHAR(20) NULL,
    `ma_rap_phim` INTEGER NULL,

    INDEX `ma_rap_phim`(`ma_rap_phim`),
    PRIMARY KEY (`ma_ghe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HeThongRap` (
    `ma_he_thong_rap` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_he_thong_rap` VARCHAR(20) NULL,
    `logo` VARCHAR(100) NULL,

    PRIMARY KEY (`ma_he_thong_rap`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LichChieu` (
    `ma_lich_chieu` INTEGER NOT NULL AUTO_INCREMENT,
    `ma_rap_phim` INTEGER NULL,
    `ma_phim` INTEGER NULL,
    `ngay_gio_chieu` DATETIME(0) NULL,
    `gia_ve` INTEGER NULL,

    INDEX `ma_phim`(`ma_phim`),
    INDEX `ma_rap_phim`(`ma_rap_phim`),
    PRIMARY KEY (`ma_lich_chieu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NguoiDung` (
    `tai_khoang` INTEGER NOT NULL AUTO_INCREMENT,
    `ho_ten` VARCHAR(20) NULL,
    `email` VARCHAR(30) NULL,
    `so_dt` VARCHAR(11) NULL,
    `mat_khau` VARCHAR(20) NULL,
    `loai_nguoi_dung` VARCHAR(20) NULL,

    PRIMARY KEY (`tai_khoang`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Phim` (
    `ma_phim` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_phim` VARCHAR(50) NULL,
    `trailer` VARCHAR(100) NULL,
    `hinh_anh` VARCHAR(100) NULL,
    `mo_ta` VARCHAR(250) NULL,
    `ngay_khoi_chieu` DATE NULL,
    `dang_gia` INTEGER NULL,
    `hot` BOOLEAN NULL,
    `dang_chieu` BOOLEAN NULL,
    `sap_chieu` BOOLEAN NULL,

    PRIMARY KEY (`ma_phim`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RapPhim` (
    `ma_rap_phim` INTEGER NOT NULL AUTO_INCREMENT,
    `ten_rap` VARCHAR(20) NULL,
    `ma_cup_rap` INTEGER NULL,

    INDEX `ma_cup_rap`(`ma_cup_rap`),
    PRIMARY KEY (`ma_rap_phim`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Banner` ADD CONSTRAINT `Banner_ibfk_1` FOREIGN KEY (`ma_phim`) REFERENCES `Phim`(`ma_phim`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `CumRap` ADD CONSTRAINT `CumRap_ibfk_1` FOREIGN KEY (`ma_he_thong_rap`) REFERENCES `HeThongRap`(`ma_he_thong_rap`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DatVe` ADD CONSTRAINT `DatVe_ibfk_1` FOREIGN KEY (`ma_ghe`) REFERENCES `Ghe`(`ma_ghe`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DatVe` ADD CONSTRAINT `DatVe_ibfk_2` FOREIGN KEY (`tai_khoang`) REFERENCES `NguoiDung`(`tai_khoang`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DatVe` ADD CONSTRAINT `DatVe_ibfk_3` FOREIGN KEY (`ma_lich_chieu`) REFERENCES `LichChieu`(`ma_lich_chieu`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Ghe` ADD CONSTRAINT `Ghe_ibfk_1` FOREIGN KEY (`ma_rap_phim`) REFERENCES `RapPhim`(`ma_rap_phim`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `LichChieu` ADD CONSTRAINT `LichChieu_ibfk_1` FOREIGN KEY (`ma_rap_phim`) REFERENCES `RapPhim`(`ma_rap_phim`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `LichChieu` ADD CONSTRAINT `LichChieu_ibfk_2` FOREIGN KEY (`ma_phim`) REFERENCES `Phim`(`ma_phim`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `RapPhim` ADD CONSTRAINT `RapPhim_ibfk_1` FOREIGN KEY (`ma_cup_rap`) REFERENCES `CumRap`(`ma_cup_rap`) ON DELETE NO ACTION ON UPDATE NO ACTION;
