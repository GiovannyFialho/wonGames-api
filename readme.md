# API Won Games 🎮

### Para subir os serviços
```shell
docker-compose up
```

## Utilizar dump existente
### Coloque o arquivo .sql dentro da pasta ```./app```
```shell
./app/exemplo.sql
```

### Agora com o docker-compose rodando, abra outra aba do terminal, acesse o diretório ```./app``` e rode o comando:
```shell
cat ARQUIVO.sql | docker exec -i NOME-DO-CONTAINER-PG psql -U NOME-DO-USUARIO-DO-BANCO -d NOME-DO-BANCO
```

## Gerando seu próprio dump
```shell
docker exec -i NOME-CONTAINER-PG pg_dump -c --if-exists --exclude-table=strapi_administrator -U NOME-USUARIO-BANCO > ARQUIVO.sql
```
## Gerando dump para produção
```shell
docker exec -i NOME-CONTAINER-PG pg_dump -Fc --no-acl --no-owner -U NOME-USUARIO-BANCO NOME-DO-BANCO > NOME-DO-ARQUIVO.dump
```
### Subir informações no heroku
```shell
git subtree push --prefix app heroku master
```
