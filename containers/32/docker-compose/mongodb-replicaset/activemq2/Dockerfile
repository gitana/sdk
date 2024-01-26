###############################################################################################
# NOT SUPPORTED FOR PRODUCTION USE
#
# This Dockerfile is provided by Cloud CMS to demonstrate how to launch and run ActiveMQ.
# It is not supported by Cloud CMS for use in a production environment.
#
# For guidance on how to run ActiveMQ in production, please check the relevant ActiveMQ documentation.
#
################################################################################################

FROM openjdk:8-jre

MAINTAINER Cloud CMS <support@cloudcms.com>


#####################################################################################
# Install ActiveMQ
#
# These steps build on what is provided here:
# https://github.com/rmohr/docker-activemq/blob/master/5.15.9/Dockerfile
#
#####################################################################################

ENV ACTIVEMQ_VERSION 5.16.4
ENV ACTIVEMQ apache-activemq-$ACTIVEMQ_VERSION
ENV ACTIVEMQ_TCP=61616 ACTIVEMQ_AMQP=5672 ACTIVEMQ_STOMP=61613 ACTIVEMQ_MQTT=1883 ACTIVEMQ_WS=61614 ACTIVEMQ_UI=8161
ENV ACTIVEMQ_HOME /opt/activemq

RUN curl "https://archive.apache.org/dist/activemq/$ACTIVEMQ_VERSION/$ACTIVEMQ-bin.tar.gz" -o $ACTIVEMQ-bin.tar.gz

RUN tar xzf $ACTIVEMQ-bin.tar.gz -C  /opt && \
    ln -s /opt/$ACTIVEMQ $ACTIVEMQ_HOME && \
    useradd -r -M -d $ACTIVEMQ_HOME activemq && \
    chown -R activemq:activemq /opt/$ACTIVEMQ && \
    chown -h activemq:activemq $ACTIVEMQ_HOME

USER activemq

WORKDIR $ACTIVEMQ_HOME
EXPOSE $ACTIVEMQ_TCP $ACTIVEMQ_AMQP $ACTIVEMQ_STOMP $ACTIVEMQ_MQTT $ACTIVEMQ_WS $ACTIVEMQ_UI

CMD ["/bin/sh", "-c", "bin/activemq console"]


#####################################################################################
# Add in Custom Files
#####################################################################################

COPY activemq.xml /opt/activemq/conf/
