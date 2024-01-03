export type IProject = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github: string;
  context: { topic: string; color: string };
  cover_image?: string;
};
