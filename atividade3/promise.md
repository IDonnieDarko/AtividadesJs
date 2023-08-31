
**promise.md:**
```markdown
# Promise

As Promises são um recurso fundamental em JavaScript para trabalhar com operações assíncronas. Elas fornecem uma maneira mais estruturada de lidar com código que depende do resultado de operações demoradas ou não imediatamente disponíveis.

## Descrição

Uma Promise representa um valor que pode estar disponível agora, no futuro ou nunca. Ela permite que você encadeie operações em um código assíncrono de forma mais legível.

Promises têm três estados possíveis:
- **Pendente (pending)**: O estado inicial, a Promise está em execução.
- **Resolvida (fulfilled)**: A operação foi concluída com sucesso e um valor é retornado.
- **Rejeitada (rejected)**: A operação falhou e uma razão para a falha é retornada.

