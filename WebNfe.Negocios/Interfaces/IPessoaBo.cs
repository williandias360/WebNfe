﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebNfe.Negocios.Interfaces
{
    public interface IPessoaBo<TEntidade> : IBaseCrudBo<TEntidade> where TEntidade :class
    {
        
    }
}
