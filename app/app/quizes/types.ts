interface Status{
    qNo: number;
    status?: number;
}

interface QuestionProps {
    qNo: number;
    qStatus: number;
    question: string;
}

export type { Status, QuestionProps };