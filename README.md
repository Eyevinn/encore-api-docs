# Encore api docs

Static version of swagger documentation for the [https://github.com/Eyevinn/encore/releases/](encore versions) from Eyevinn Technology.

# Updating api docs
## Updating swagger-ui
The site currently uses [swagger-ui](https://github.com/swagger-api/swagger-ui) version 5.20.0 . To update
to a newer version, download the version release from the [github releases page](https://github.com/swagger-api/swagger-ui/releases), and extract the content of the archives `dist` folder into the projects `docs/dist` folder.

## Updating encore api yaml
Fetch the swagger specification from encore instance
`curl http://localhost:8080/v3/api-docs.yaml > docs/swagger-encore-VERSION.yaml`
where version is of format a.b.c-d

# License
Swagger-ui code is licensed under Apache 2.0.
Encore api is licensed under EU Public LIcense 1.2 .


