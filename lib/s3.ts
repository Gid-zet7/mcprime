import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME || '';

/**
 * Generate a presigned URL for uploading a file directly to S3 from the client.
 * @param key - The unique filename (key) for the object in S3.
 * @param contentType - The MIME type of the file.
 * @returns { url, key }
 */
export async function getUploadUrl(key: string, contentType: string) {
    const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        ContentType: contentType,
        // Add any ACLs if needed, e.g., 'public-read' if the bucket is configured for it
        // or rely on a CloudFront distribution which is better.
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    return { url, key };
}

/**
 * Delete a file from S3.
 * @param key - The key of the file to delete.
 */
export async function deleteFileFromS3(key: string) {
    const command = new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
    });

    await s3Client.send(command);
}

export function getS3PublicUrl(key: string) {
    // If using CloudFront, this should be the CloudFront domain
    if (process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN) {
        return `${process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/${key}`;
    }
    return `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}
