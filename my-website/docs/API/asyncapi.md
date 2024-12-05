---
title: Асинхронные взаимодействия
hide_table_of_contents: true
---
### Код для AsyncAPI
```yaml
asyncapi: 3.0.0
info:
  title: Отправка уведомлений в сервисе Made by hand
  version: 1.0.0
  description: Сервис отправки уведомлений о новых сообщениях в чате между заказчиком и мастером

servers:
  production:
    host: 'rabbitmq.in.madebyhand.com:5672'
    protocol: amqp

channels:
  chats/notifications:
    address: chats/notifications
    description: Канал для отправки уведомлений о новых сообщениях в чате
    messages:
      message:
        $ref: '#/components/messages/ChatNotification'

operations:
  chats/notifications:
    action: send
    channel:
      $ref: '#/channels/chats~1notifications'
    messages:
      - $ref: '#/channels/chats~1notifications/messages/message'

components:
  messages:
    ChatNotification:
      name: ChatNotification
      title: Уведомление о новом сообщении
      payload:
        type: object
        properties:
          userId:
            type: string
            description: ID пользователя, которому нужно отправить уведомление о новом сообщении
          orderTitle:
            type: string
            description: Название заказа, по которому идет коммуникация в чате
          senderName:
            type: string
            description: Имя отправителя сообщения
          message:
            type: string
            description: Текст сообщения