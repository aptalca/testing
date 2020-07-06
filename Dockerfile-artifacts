ARG INPUT_TRIGGER_TAG

FROM linuxserver/docker-compose:amd64-${INPUT_TRIGGER_TAG} as compose-amd64
FROM linuxserver/docker-compose:arm32v7-${INPUT_TRIGGER_TAG} as compose-arm32
FROM linuxserver/docker-compose:arm64v8-${INPUT_TRIGGER_TAG} as compose-arm64

FROM lsiobase/alpine:3.12 as buildstage

COPY --from=compose-amd64 /usr/local/bin/docker-compose /root-layer/docker-compose/docker-compose_x86_64
COPY --from=compose-amd64 /usr/local/bin/docker /root-layer/docker-compose/docker_x86_64
COPY --from=compose-arm32 /usr/local/bin/docker-compose /root-layer/docker-compose/docker-compose_armv7l
COPY --from=compose-arm32 /usr/local/bin/docker /root-layer/docker-compose/docker_armv7l
COPY --from=compose-arm64 /usr/local/bin/docker-compose /root-layer/docker-compose/docker-compose_aarch64
COPY --from=compose-arm64 /usr/local/bin/docker /root-layer/docker-compose/docker_aarch64

ENTRYPOINT [ "cp", "-r", "/root-layer/docker-compose", "$GITHUB_WORKSPACE/" ]
