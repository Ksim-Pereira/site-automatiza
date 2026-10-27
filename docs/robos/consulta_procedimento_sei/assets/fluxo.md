graph TD;
    1((Início)) --> 2;
    2[Realiza chamada à API externa] --> 3;
    3[Valida se a resposta da API foi bem-sucedida] --> 4;
    4[Realiza download do processo SEI em PDF ou dos documentos em arquivo ZIP] --> 5;
    5((Fim))
