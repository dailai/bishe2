/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50642
 Source Host           : localhost:3306
 Source Schema         : bishe

 Target Server Type    : MySQL
 Target Server Version : 50642
 File Encoding         : 65001

 Date: 04/01/2019 08:38:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_role
-- ----------------------------
DROP TABLE IF EXISTS `admin_role`;
CREATE TABLE `admin_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_user_id` int(11) NULL DEFAULT NULL,
  `role_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of admin_role
-- ----------------------------
INSERT INTO `admin_role` VALUES (1, 1, 1);
INSERT INTO `admin_role` VALUES (3, 3, 2);
INSERT INTO `admin_role` VALUES (4, 4, 1);

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '头像',
  `email` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '邮箱',
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '姓名',
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '密码',
  `phone` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '手机',
  `signature` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '署名',
  `status` tinyint(11) NOT NULL DEFAULT 0 COMMENT '状态',
  `tags` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '标签',
  `title` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '职位',
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '用户名',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `IDXlvod9bfm438ex1071ku1glb70`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, '2018-12-06 19:03:00', 'http://localhost:8089/BiazfanxmamNRoxxVxka.png', '123', '123', '202cb962ac59075b964b07152d234b70', '123', '123', 0, '', '123', '123');
INSERT INTO `admin_user` VALUES (3, '2018-12-24 15:13:34', '', '123ss', '123ss', '431e847d8adf7f2f7603087782219b4f', '123ss', '', 0, '', '', '123ss');
INSERT INTO `admin_user` VALUES (4, '2018-12-24 17:05:37', 'http://localhost:8089/BiazfanxmamNRoxxVxka.png', '', '游客1212', '', '', '游客1212', 0, '', '游客1212', '');

-- ----------------------------
-- Table structure for big_img
-- ----------------------------
DROP TABLE IF EXISTS `big_img`;
CREATE TABLE `big_img`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `height` int(11) NOT NULL DEFAULT 0 COMMENT '高',
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '操作员名字',
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '显示状态',
  `title` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '标题',
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '视频访问路径',
  `width` int(11) NOT NULL DEFAULT 0 COMMENT '宽',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of big_img
-- ----------------------------
INSERT INTO `big_img` VALUES (2, '2018-12-14 15:57:38', 180, 'Serati Ma', 1, '1122', 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-14/2bff7c27448a498ab442caa0ba7d7770-6c42c40ed54f4bb5ea491894aff693878afa6580.png', 1920);
INSERT INTO `big_img` VALUES (3, '2018-12-14 16:13:08', 180, 'Serati Ma', 0, '1111', 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-14/e92e523816b748429b5f624855a64b7d-87e0b37441cd50025c0be41203b9662b520dc1e0.png', 1920);
INSERT INTO `big_img` VALUES (4, '2018-12-25 15:25:27', 180, '123', 1, 'sfdsf', 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-25/fab8af31abfb478cb4f8dd433cd3cd04.png', 1920);
INSERT INTO `big_img` VALUES (5, '2018-12-25 15:25:44', 180, '123', 1, 'sfdsf', 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-25/fab8af31abfb478cb4f8dd433cd3cd04.png', 1920);
INSERT INTO `big_img` VALUES (9, '2018-12-25 15:27:50', 180, '123', 1, 'undefined', 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-25/95e8886c5db647378b3a0781f879df7b.png', 1920);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '角色名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'admin');
INSERT INTO `role` VALUES (2, 'user');
INSERT INTO `role` VALUES (3, 'guest');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `number` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '序列号',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '头像',
  `nickname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '昵称',
  `password` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '密码',
  `username` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '用户名',
  `video_num` int(11) NOT NULL DEFAULT 0 COMMENT '视频投稿数量',
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '状态0正常，1冻结',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 23 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (16, '2018-12-20 09:55:07', '', NULL, '456', '202cb962ac59075b964b07152d234b70', '1234567892', 0, 0);
INSERT INTO `user` VALUES (14, '2018-12-20 09:45:58', '', NULL, '123', '25f9e794323b453885f5181f1b624d0b', '123456789', 0, 0);
INSERT INTO `user` VALUES (15, '2018-12-20 09:48:03', '', NULL, '321', '25f9e794323b453885f5181f1b624d0b', '1234567891', 0, 0);
INSERT INTO `user` VALUES (17, '2018-12-20 09:56:35', '', NULL, '654', 'e10adc3949ba59abbe56e057f20f883e', '1234567893', 0, 0);
INSERT INTO `user` VALUES (18, '2018-12-20 10:00:51', '', NULL, '789', 'e10adc3949ba59abbe56e057f20f883e', '1234567898', 0, 0);
INSERT INTO `user` VALUES (19, '2018-12-20 10:04:02', '', NULL, '978', '202cb962ac59075b964b07152d234b70', '1234567897', 0, 0);
INSERT INTO `user` VALUES (20, '2018-12-20 10:05:16', '', NULL, '741', '202cb962ac59075b964b07152d234b70', '12345678988', 0, 0);
INSERT INTO `user` VALUES (21, '2018-12-20 10:06:35', '', NULL, '963', '202cb962ac59075b964b07152d234b70', '1234567896', 0, 0);
INSERT INTO `user` VALUES (22, '2018-12-27 14:41:41', '', NULL, '哈哈', 'e10adc3949ba59abbe56e057f20f883e', '12345678922', 0, 0);

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `number` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '序列号',
  `brief_introduction` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '简介',
  `check_status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '审核状态0已审核，1未审核，2审核中，3未通过',
  `cover_url` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '封面路径',
  `duration` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '视频时长',
  `good_num` int(11) NOT NULL DEFAULT 0 COMMENT '点赞次数',
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '视频访问路径',
  `play_num` int(11) NOT NULL DEFAULT 0 COMMENT '播放次数',
  `show_status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '显示状态0正在，1禁止',
  `title` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '标题',
  `video_cat_id` int(11) NOT NULL DEFAULT 0 COMMENT '视频分类id',
  `nickname` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 174 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of video
-- ----------------------------
INSERT INTO `video` VALUES (114, '2018-12-20 13:31:32', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 1, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (115, '2018-12-20 13:31:38', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (113, '2018-12-20 13:31:32', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (74, '2018-12-20 13:23:12', '', '撒旦范德萨发大水发射点发', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 8, 0, '随风倒随风倒十分但是', 1, '123');
INSERT INTO `video` VALUES (75, '2018-12-20 13:31:22', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (76, '2018-12-20 13:31:23', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (77, '2018-12-20 13:31:23', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (78, '2018-12-20 13:31:23', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 11, 1, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (79, '2018-12-20 13:31:23', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 112, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (80, '2018-12-20 13:31:23', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (81, '2018-12-20 13:31:23', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (82, '2018-12-20 13:31:23', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 110, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (83, '2018-12-20 13:31:24', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (84, '2018-12-20 13:31:24', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (85, '2018-12-20 13:31:24', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 55, 1, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (86, '2018-12-20 13:31:24', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 30000, 0, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (87, '2018-12-20 13:31:24', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 11, 1, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (88, '2018-12-20 13:31:24', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 1, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (89, '2018-12-20 13:31:25', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 1, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (90, '2018-12-20 13:31:25', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 66, 1, '大师傅犯得上发', 1, '123');
INSERT INTO `video` VALUES (91, '2018-12-20 13:31:28', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 1, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (92, '2018-12-20 13:31:29', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (93, '2018-12-20 13:31:29', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (94, '2018-12-20 13:31:29', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (95, '2018-12-20 13:31:29', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (96, '2018-12-20 13:31:29', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (97, '2018-12-20 13:31:29', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (98, '2018-12-20 13:31:30', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (99, '2018-12-20 13:31:30', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (100, '2018-12-20 13:31:30', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (101, '2018-12-20 13:31:30', '', '发上的分为氛围', 1, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (102, '2018-12-20 13:31:30', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (103, '2018-12-20 13:31:30', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (104, '2018-12-20 13:31:31', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (105, '2018-12-20 13:31:31', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (106, '2018-12-20 13:31:31', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (107, '2018-12-20 13:31:31', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (108, '2018-12-20 13:31:31', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (109, '2018-12-20 13:31:31', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (110, '2018-12-20 13:31:31', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (111, '2018-12-20 13:31:32', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (112, '2018-12-20 13:31:32', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130143509_asf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 2, '123');
INSERT INTO `video` VALUES (73, '2018-12-20 13:15:52', '', '分为氛围分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '发士大夫分为氛围', 1, '123');
INSERT INTO `video` VALUES (116, '2018-12-20 13:31:38', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (117, '2018-12-20 13:31:39', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (118, '2018-12-20 13:31:39', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (119, '2018-12-20 13:31:39', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (120, '2018-12-20 13:31:39', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (121, '2018-12-20 13:31:39', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (122, '2018-12-20 13:31:39', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (123, '2018-12-20 13:31:39', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (124, '2018-12-20 13:31:39', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (125, '2018-12-20 13:31:40', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (126, '2018-12-20 13:31:40', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (127, '2018-12-20 13:31:40', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (128, '2018-12-20 13:31:40', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (129, '2018-12-20 13:31:40', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (130, '2018-12-20 13:31:40', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (131, '2018-12-20 13:31:41', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (132, '2018-12-20 13:31:41', '', '发上的分为氛围', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 3, '123');
INSERT INTO `video` VALUES (133, '2018-12-20 13:31:44', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (134, '2018-12-20 13:31:45', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (135, '2018-12-20 13:31:45', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (136, '2018-12-20 13:31:45', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (137, '2018-12-20 13:31:45', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (138, '2018-12-20 13:31:45', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (139, '2018-12-20 13:31:45', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (140, '2018-12-20 13:31:46', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (141, '2018-12-20 13:31:46', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (142, '2018-12-20 13:31:46', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (143, '2018-12-20 13:31:46', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (144, '2018-12-20 13:31:46', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (145, '2018-12-20 13:31:46', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (146, '2018-12-20 13:31:46', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (147, '2018-12-20 13:31:47', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (148, '2018-12-20 13:31:47', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (149, '2018-12-20 13:31:47', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (150, '2018-12-20 13:31:47', '', '发上的分为氛围', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '01:17', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '大师傅犯得上发', 4, '123');
INSERT INTO `video` VALUES (151, '2018-12-20 13:32:41', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (152, '2018-12-20 13:32:41', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (153, '2018-12-20 13:32:41', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (154, '2018-12-20 13:32:42', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (155, '2018-12-20 13:32:42', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (156, '2018-12-20 13:32:42', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (157, '2018-12-20 13:32:42', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 1, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (158, '2018-12-20 13:32:42', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 1, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (159, '2018-12-20 13:32:42', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (160, '2018-12-20 13:32:43', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130134340_123456.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 1, 0, '的方式服务范围', 1, '123');
INSERT INTO `video` VALUES (161, '2018-12-20 13:32:45', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 3, '123');
INSERT INTO `video` VALUES (162, '2018-12-20 13:32:46', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 3, '123');
INSERT INTO `video` VALUES (163, '2018-12-20 13:32:46', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 3, '123');
INSERT INTO `video` VALUES (164, '2018-12-20 13:32:46', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 3, '123');
INSERT INTO `video` VALUES (165, '2018-12-20 13:32:46', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 3, '123');
INSERT INTO `video` VALUES (166, '2018-12-20 13:32:46', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 3, '123');
INSERT INTO `video` VALUES (167, '2018-12-20 13:32:46', '', '示范点发射点发顺丰', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130144615_2f46568abd5587.png', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 3, '123');
INSERT INTO `video` VALUES (168, '2018-12-20 13:32:48', '', '示范点发射点发顺丰', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 4, '123');
INSERT INTO `video` VALUES (169, '2018-12-20 13:32:49', '', '示范点发射点发顺丰', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 4, '123');
INSERT INTO `video` VALUES (170, '2018-12-20 13:32:49', '', '示范点发射点发顺丰', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 4, '123');
INSERT INTO `video` VALUES (171, '2018-12-20 13:32:49', '', '示范点发射点发顺丰', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 4, '123');
INSERT INTO `video` VALUES (172, '2018-12-20 13:32:49', '', '示范点发射点发顺丰', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 4, '123');
INSERT INTO `video` VALUES (173, '2018-12-20 13:32:49', '', '示范点发射点发顺丰', 0, '\r\nhttps://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/20181130151238_e9fdae1e5788f146a54d82bdb0ebbfd24ea3fbcf.jpg', '10:36', 0, 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-27/5.mp4', 0, 0, '的方式服务范围', 4, '123');

-- ----------------------------
-- Table structure for video_cat
-- ----------------------------
DROP TABLE IF EXISTS `video_cat`;
CREATE TABLE `video_cat`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `number` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '序列号',
  `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '分类名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of video_cat
-- ----------------------------
INSERT INTO `video_cat` VALUES (1, '2018-11-27 08:53:41', '', '动画');
INSERT INTO `video_cat` VALUES (2, '2018-11-30 11:38:01', '', '游戏');
INSERT INTO `video_cat` VALUES (3, '2018-11-30 11:38:01', '', '国创');
INSERT INTO `video_cat` VALUES (4, '2018-11-30 11:38:01', '', '音乐');
INSERT INTO `video_cat` VALUES (5, '2018-11-30 11:38:01', '', '舞蹈');

SET FOREIGN_KEY_CHECKS = 1;
