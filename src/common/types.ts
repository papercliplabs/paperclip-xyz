import { ProjectTag } from "./enums";

export interface ProjectInfo {
	title: string;
	img: string;
	link: string;
	tags: ProjectTag[];
}
