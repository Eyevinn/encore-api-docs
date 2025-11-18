# Encore api docs

Static version of swagger documentation for the [encore versions](https://github.com/Eyevinn/encore/releases/) from Eyevinn Technology.
This site is rendered on githup pages on https://eyevinn.github.io/encore-api-docs.

# Updating api docs
## Updating swagger-ui
The site currently uses [swagger-ui](https://github.com/swagger-api/swagger-ui) version 5.20.0 . To update
to a newer version, download the version release from the [github releases page](https://github.com/swagger-api/swagger-ui/releases), and extract the content of the archives `dist` folder into the projects `docs/dist` folder.

## Add api yaml for new encore version
1. Fetch the swagger specification from encore instance of the new version
`curl http://localhost:8080/v3/api-docs.yaml > docs/swagger-encore-VERSION.yaml`
where VERSION is of format `a.b.c-d`.
2. Add the new version to the list in `docs/custom-swagger-initializer.js`.
3. Updated docs will be deployed to github pages on push.

# License
Swagger-ui code is licensed under Apache 2.0.
Encore api is licensed under EU Public LIcense 1.2 .


