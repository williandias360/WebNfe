using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Domain.Entidades;

namespace WebNfe.Infra.Data.EntityConfig
{
    public class CidadeConfiguration : EntityTypeConfiguration<Cidade>
    {
        public CidadeConfiguration()
        {
            HasKey(c => c.CodigoCidade);

            Property(c => c.Nome)
                .IsRequired()
                .HasMaxLength(120);

            Property(c => c.Uf)
                .IsRequired()
                .HasMaxLength(2);

            Property(c => c.Ibge)
                .IsRequired()
                .HasMaxLength(10);
        }
    }
}
