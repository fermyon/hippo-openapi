DOCKER_IMAGE="openapitools/openapi-generator-cli"
PACKAGE_NAME="hippo-openapi"

clients: swagger.json
	@echo "==> Building OpenAPI clients..."
	for lang in go rust javascript ; do \
		docker run \
			--rm \
			--volume "$(PWD):/local" \
			--workdir "/local" \
			 $(DOCKER_IMAGE) generate -i swagger.json -g $$lang -o clients/$$lang --package-name "$(PACKAGE_NAME)" --config config/$$lang.json ; \
	done

clean:
	rm -rf clients
