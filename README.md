# Encore api docs

Static version of swagger documentation for the lates encore version from Eyevinn Technology. Current version
is [https://github.com/Eyevinn/encore/releases/tag/v0.2.6-4](0.2.6-4)

## Regenerating the documentation.
The site is generated with [https://github.com/swagger-api/swagger-codegen](swagger-codegen)

- From a running encore instance, get the swagger file with curl
`curl http://localhost:8080/v3/api-docs.yaml > swagger.yaml`

- Run swagger codegen
`java -jar modules/swagger-codegen-cli/target/swagger-codegen-cli.jar generate -i swagger.yaml -l html2 -o .`
