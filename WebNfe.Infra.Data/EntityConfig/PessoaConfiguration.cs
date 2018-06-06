using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebNfe.Domain.Entidades;

namespace WebNfe.Infra.Data.EntityConfig
{
    public class PessoaConfiguration:EntityTypeConfiguration<Pessoa>
    {
        public PessoaConfiguration()
        {
            HasKey(c => c.CodigoPessoa);

            Property(c => c.Nome)
                .IsRequired()
                .HasMaxLength(150);

            Property(c => c.Complemento)
                .HasMaxLength(255);

            Property(c => c.Observacao)
                .HasMaxLength(350);

            Property(c => c.CodigoEmpresa)
                .IsRequired();

            Property(c => c.CodigoCidade)
                .IsRequired();

            HasRequired(c => c.Cidade)
                .WithMany()
                .HasForeignKey(c => c.CodigoCidade);

            HasRequired(c => c.Empresa)
                .WithMany()
                .HasForeignKey(c => c.CodigoEmpresa);

        }
    }
}
