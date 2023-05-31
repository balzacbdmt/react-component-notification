# react-component-notification

Simple React notification component.

Check out demo <a href="https://www.balzac.dev/reactComponentNotification/">here</a>

## Installation

```bash
npm install react-component-notification
```

or:

```bash
yarn add react-component-notification
```

## Usage

```jsx static
import Notification from "react-simple-notification";

<Notification title="Amazing title" content="Your best content" />;
```

| Props        | Description                             | Default value | type    |
| ------------ | --------------------------------------- | ------------- | ------- |
| title        | title displayed in the notification     | null          | string  |
| content      | content displayed in the notification   | null          | string  |
| closeTimeOut | delay to hide the notification (in ms)  | 3000          | integer |
| icon         | icon in the notification                | null          | element |
| className    | className of the notification container | null          | string  |
| position     | position on the screen                  | top_left      | string  |

Possible `position` : `top_left, top_center, top_right, bottom_left, bottom_center, bottom_right`

_Developed with ♥️ by Balzac 🥷🏻_
