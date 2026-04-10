export type PostProps = {
  metadata: {
    title: string,
    summary: string,
    publishedAt: string
  },
  slug: string,
}

export type PythonToken = {
    type: number;
    type_name: string;
    exact_type: number;
    exact_type_name: string;
    string: string;
    start: [number, number];
    end: [number, number];
};