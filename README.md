# Encore api docs

Static version of swagger documentation for the lates encore version from Eyevinn Technology. Current version
is [https://github.com/Eyevinn/encore/releases/tag/v0.2.6-4](0.2.6-4)

# Updating api docs
## Updating swagger-ui
The site currently uses [swagger-ui](https://github.com/swagger-api/swagger-ui) version 5.20.0 . To update
to a newer version, download the version release from the [github releases page](https://github.com/swagger-api/swagger-ui/releases), and extract the content of the archives `dist` folder into the projects `docs` folder.

## Updating encore api yaml
Fetch the swagger specification from local encore instance
`curl http://localhost:8080/v3/api-docs.yaml > docs/swagger.yaml`

# License
Swagger-ui code is licensed under Apache 2.0.
Encore api is licensed under EU Public LIcense 1.2 .
