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

        public virtual DbSet<Orderbooking> Orderbookings { get; set; }
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

            modelBuilder.Entity<Orderbooking>(entity =>
            {
                entity.ToTable("orderbooking");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .HasColumnName("address");

                entity.Property(e => e.Country)
                    .HasMaxLength(50)
                    .HasColumnName("country");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Firstname)
                    .HasMaxLength(50)
                    .HasColumnName("firstname");

                entity.Property(e => e.Lastname)
                    .HasMaxLength(50)
                    .HasColumnName("lastname");

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .HasColumnName("state");
            });

            modelBuilder.Entity<TblLogin>(entity =>
            {
                entity.ToTable("TblLogin");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.UserName).HasMaxLength(50);
            });

            modelBuilder.Entity<TblProperty>(entity =>
            {
                entity.ToTable("TblProperty");

                entity.Property(e => e.PropertyDescription).HasMaxLength(50);

                entity.Property(e => e.PropertyImage).HasMaxLength(50);

                entity.Property(e => e.PropertyName).HasMaxLength(50);

                entity.Property(e => e.PropertySize).HasMaxLength(50);

                entity.Property(e => e.Propertylocation).HasMaxLength(50);
            });

            modelBuilder.Entity<TblVenderProperty>(entity =>
            {
                entity.ToTable("TblVenderProperty");

                entity.HasIndex(e => e.Email, "UQ__TblVende__A9D10534B1674876")
                    .IsUnique();

                entity.HasIndex(e => e.UserName, "UQ__TblVende__C9F28456B8950D85")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .HasMaxLength(200)
                    .IsUnicode(false);

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

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
