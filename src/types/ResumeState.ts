export default interface ResumeState {
    experience: ResumeStateExperience;
}


export interface ResumeStateExperience {
    scrollSnaps: number[];

    selected: number;
}
