export type IProject = {
  _id?: string
  title: string;
  description: string;
  urlImage: string;
  tags: string[];
  urlGithub: string;
  urlDeploy: string;
}

export type ProjectType = {
  _id: string;
  title: string;
  description: string;
  urlGithub: string;
  urlDeploy: string;
  urlImage: string;
  tags: string[];
};