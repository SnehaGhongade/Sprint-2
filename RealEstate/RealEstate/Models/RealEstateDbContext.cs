using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace RealEstate.Models
{
    public partial class RealEstateDbContext : DbContext
    {
        public RealEstateDbContext()
        {
        }

        public RealEstateDbContext(DbContextOptions<RealEstateDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<OrderDetailTbl> OrderDetailTbls { get; set; }
        public virtual DbSet<OrderTbl> OrderTbls { get; set; }
        public virtual DbSet<TblLogin> TblLogins { get; set; }
        public virtual DbSet<TblProperty> TblProperties { get; set; }
        public virtual DbSet<TblVenderProperty> TblVenderProperties { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-4SN8KIT;Initial Catalog=RealEstateDb;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<OrderDetailTbl>(entity =>
            {
                entity.ToTable("OrderDetailTbl");

                entity.Property(e => e.HouseDescription).HasMaxLength(100);

                entity.Property(e => e.HouseName).HasMaxLength(100);

                entity.Property(e => e.HousePrize).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.VendorEmail).HasMaxLength(100);

                entity.Property(e => e.VendorName).HasMaxLength(100);
            });

            modelBuilder.Entity<OrderTbl>(entity =>
            {
                entity.ToTable("OrderTbl");

                entity.Property(e => e.Address)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("lastName");

                entity.Property(e => e.Paymentmode)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("paymentmode");

                entity.Property(e => e.PhoneNo)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblLogin>(entity =>
            {
                entity.ToTable("TblLogin");

                entity.Property(e => e.IsAdmin).HasColumnName("isAdmin");

                entity.Property(e => e.IsVender).HasColumnName("isVender");

                entity.Property(e => e.MobileNumber).HasColumnName("MObileNumber");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblProperty>(entity =>
            {
                entity.ToTable("TblProperty");

                entity.Property(e => e.PropertyDescription)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.PropertyImage)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.PropertyName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.PropertySize)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Propertylocation)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblVenderProperty>(entity =>
            {
                entity.ToTable("TblVenderProperty");

                entity.Property(e => e.PropertyDescription)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.PropertyImage)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.PropertyName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.PropertySize)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Propertylocation)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
