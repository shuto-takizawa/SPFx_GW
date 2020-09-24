FROM node:10.21.0

EXPOSE 6543 4321 35729

RUN npm i -g gulp yo @microsoft/generator-sharepoint@1.11.0

VOLUME /usr/app/spfx
WORKDIR /usr/app/spfx
RUN useradd --create-home --shell /bin/bash spfx && \
    usermod -aG sudo spfx && \
    chown -R spfx:spfx /usr/app/spfx

USER spfx

CMD /bin/bash
