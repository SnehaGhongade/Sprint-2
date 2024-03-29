USE [master]
GO
/****** Object:  Database [RealEstateDb]    Script Date: 24-07-2022 14:41:27 ******/
CREATE DATABASE [RealEstateDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'RealEstateDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\RealEstateDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'RealEstateDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\RealEstateDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [RealEstateDb] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [RealEstateDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [RealEstateDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [RealEstateDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [RealEstateDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [RealEstateDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [RealEstateDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [RealEstateDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [RealEstateDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [RealEstateDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [RealEstateDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [RealEstateDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [RealEstateDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [RealEstateDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [RealEstateDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [RealEstateDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [RealEstateDb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [RealEstateDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [RealEstateDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [RealEstateDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [RealEstateDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [RealEstateDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [RealEstateDb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [RealEstateDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [RealEstateDb] SET RECOVERY FULL 
GO
ALTER DATABASE [RealEstateDb] SET  MULTI_USER 
GO
ALTER DATABASE [RealEstateDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [RealEstateDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [RealEstateDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [RealEstateDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [RealEstateDb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [RealEstateDb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'RealEstateDb', N'ON'
GO
ALTER DATABASE [RealEstateDb] SET QUERY_STORE = OFF
GO
USE [RealEstateDb]
GO
/****** Object:  Table [dbo].[TblLogin]    Script Date: 24-07-2022 14:41:27 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblLogin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](200) NOT NULL,
	[Password] [varchar](100) NOT NULL,
	[MObileNumber] [int] NULL,
	[isAdmin] [int] NULL,
	[isVender] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblOrder]    Script Date: 24-07-2022 14:41:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblOrder](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [varchar](200) NULL,
	[UserName] [varchar](200) NULL,
	[PropertyImage] [varchar](100) NOT NULL,
	[VenderName] [varchar](200) NULL,
	[Email] [varchar](200) NULL,
	[Address] [varchar](200) NULL,
	[HousePrice] [int] NULL,
	[VendorUserName] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblProperty]    Script Date: 24-07-2022 14:41:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblProperty](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](200) NULL,
	[PropertyName] [varchar](200) NULL,
	[PropertyDescription] [varchar](500) NULL,
	[PropertyImage] [varchar](100) NULL,
	[PropertySize] [varchar](100) NULL,
	[Propertylocation] [varchar](200) NULL,
	[PropertyPrice] [int] NULL,
	[Discount] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TblVenderProperty]    Script Date: 24-07-2022 14:41:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TblVenderProperty](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PropertyName] [varchar](200) NOT NULL,
	[PropertyDescription] [varchar](500) NULL,
	[PropertyImage] [varchar](100) NOT NULL,
	[PropertySize] [varchar](100) NOT NULL,
	[Propertylocation] [varchar](200) NOT NULL,
	[PropertyPrice] [int] NULL,
	[Discount] [int] NULL,
	[IsApproved] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[TblLogin] ON 

INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (1, N'sneha', N'sneha1234', NULL, NULL, 0)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (2, N'ankit', N'ankit1234', NULL, NULL, 0)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (3, N'sakshi', N'sakshi1234', NULL, NULL, 0)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (4, N'shubhangi', N'123456789', NULL, NULL, 0)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (5, N'Raj', N'raj12345', NULL, NULL, 1)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (6, N'sonal', N'123456789', NULL, NULL, 1)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (7, N'jhsfgbshb', N'123456789', NULL, NULL, 1)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (8, N'kjsesghejs', N'123456789', NULL, NULL, 0)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (9, N'khyati', N'khyati1234', NULL, NULL, 0)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (10, N'vendor', N'123456789', NULL, NULL, 1)
INSERT [dbo].[TblLogin] ([Id], [UserName], [Password], [MObileNumber], [isAdmin], [isVender]) VALUES (11, N'megha', N'megha1234', NULL, NULL, 1)
SET IDENTITY_INSERT [dbo].[TblLogin] OFF
GO
SET IDENTITY_INSERT [dbo].[TblProperty] ON 

INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (1, NULL, N'string', N'string', N'string', N'string', N'string', 0, 0)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (2, NULL, N'House', N'2 bhk house', N'C:\fakepath\card4.jpg', N'120*120', N'mumbai', 1000000, 12)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (3, NULL, N'string', N'string', N'string', N'string', N'string', 0, 0)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (4, NULL, N'kjeegs', N'ierjeiurej', N'C:\fakepath\card6.jpg', N'1236', N'jhdbgjh', 123, 12)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (5, NULL, N'shsgfs', N'ksjgsk', N'C:\fakepath\card2.jpg', N'123', N'mumbi', 120, 10)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (6, NULL, N'property', N'jhfs', N'ksjeh', N'ehjsnh', N'kehsudf', 102, 10)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (7, NULL, N'Property', N'kejshgesjdkh', N'https://housestorage20.blob.core.windows.net/images/card1.jpg', N'123', N'nagpur', 120000000, 10)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (8, N'dkjrdgj', N'kejseg', N'eij', N'irjd', N'kirjei', N'oierjeu', 123, 10)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (9, N'dkjrdgj', N'kejseg', N'eij', N'irjd', N'kirjei', N'oierjeu', 123, 10)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (10, NULL, N'keushu', N'ieuw4tw', N'https://housestorage20.blob.core.windows.net/images/card3.jpg', N'123', N'iue', 200000000, 10)
INSERT [dbo].[TblProperty] ([Id], [UserName], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount]) VALUES (11, NULL, N'ejhujuwjet', N'iuehweuwhtiwu', N'https://housestorage20.blob.core.windows.net/images/card4.jpg', N'123*123', N'mumbai', 1000000, 10)
SET IDENTITY_INSERT [dbo].[TblProperty] OFF
GO
SET IDENTITY_INSERT [dbo].[TblVenderProperty] ON 

INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (1, N'string', N'string', N'string', N'string', N'string', 0, 0, 1)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (2, N'House', N'2 bhk house', N'C:\fakepath\card4.jpg', N'120*120', N'mumbai', 1000000, 12, 1)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (3, N'', N'', N'', N'', N'', 0, 0, NULL)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (4, N'', N'', N'', N'', N'', 0, 0, NULL)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (5, N'', N'', N'', N'', N'', 0, 0, NULL)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (6, N'', N'', N'', N'', N'', 0, 0, NULL)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (7, N'ksejheuk', N'krjeuhu', N'C:\fakepath\card6.jpg', N'1236', N'sueheu', 10, 10, NULL)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (8, N'property', N'jhfs', N'ksjeh', N'ehjsnh', N'kehsudf', 102, 10, 1)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (9, N'shsgfs', N'ksjgsk', N'C:\fakepath\card2.jpg', N'123', N'mumbi', 120, 10, 1)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (10, N'kjeegs', N'ierjeiurej', N'C:\fakepath\card6.jpg', N'1236', N'jhdbgjh', 123, 12, 1)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (11, N'hgfhg', N'jhgjh', N'kjhuj', N'kjnk', N'kjhbj', 10, 10, 0)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (12, N'keushu', N'ieuw4tw', N'https://housestorage20.blob.core.windows.net/images/card3.jpg', N'123', N'iue', 200000000, 10, 1)
INSERT [dbo].[TblVenderProperty] ([Id], [PropertyName], [PropertyDescription], [PropertyImage], [PropertySize], [Propertylocation], [PropertyPrice], [Discount], [IsApproved]) VALUES (13, N'ejhujuwjet', N'iuehweuwhtiwu', N'https://housestorage20.blob.core.windows.net/images/card4.jpg', N'123*123', N'mumbai', 1000000, 10, 1)
SET IDENTITY_INSERT [dbo].[TblVenderProperty] OFF
GO
USE [master]
GO
ALTER DATABASE [RealEstateDb] SET  READ_WRITE 
GO
