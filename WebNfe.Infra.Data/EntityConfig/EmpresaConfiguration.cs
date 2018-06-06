using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Domain.Entidades;

namespace WebNfe.Infra.Data.EntityConfig
{
    public class EmpresaConfiguration : EntityTypeConfiguration<Empresa>
    {
        public EmpresaConfiguration()
        {
            HasKey(c => c.CodigoEmpresa);

            Property(c => c.Cnpj)
                .IsRequired()
                .HasMaxLength(14);

            Property(c => c.RazaoSocial)
                .IsRequired()
                .HasMaxLength(80);

            Property(c => c.Fantasia)
                .IsRequired()
                .HasMaxLength(80);

            Property(c => c.InscricaoEstadual)
                .IsRequired()
                .HasMaxLength(19);

            Property(c => c.InscricaoMunicipal)
                .HasMaxLength(15);

            HasRequired(c => c.Cidade)
                .WithMany()
                .HasForeignKey(c => c.CodigoCidade);
        }
    }
}
