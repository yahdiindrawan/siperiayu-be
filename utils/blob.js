import { put, del } from "@vercel/blob";

const BLOB_URL = process.env.BLOB_PUBLIC_URL;

export const uploadFile = async (file, folder = "files") => {
  if (!file) return null;

  const pathname = folder
    ? `${folder}/${Date.now()}-${file.originalname}`
    : `${Date.now()}-${file.originalname}`;

  const blob = await put(pathname, file.buffer, {
    access: "public",
  });

  return {
    pathname: blob.pathname,
    url: blob.url,
  };
};

export const deleteFile = async (pathnameOrUrl) => {
  if (!pathnameOrUrl) return;

  const url = pathnameOrUrl.startsWith("http")
    ? pathnameOrUrl
    : `${BLOB_URL}/${pathnameOrUrl}`;

  await del(url);
};
