export type User = {
  username: string;
  servers: Server[];
};

export type Server = {
  title: string;
  url: string;
  channels: Channel[];
  notifications: number;
};

export type Channel = {
  title: string;
  notifications: number;
};
