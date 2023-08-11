"use client";
export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>OOOPS!!!{error.message}</h1>;
}
