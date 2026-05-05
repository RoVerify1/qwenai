import { SignJWT, jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET || 'fallback-secret-key';
const key = new TextEncoder().encode(secretKey);

export async function sign(payload: Record<string, unknown>): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key);
}

export async function verify(token: string): Promise<Record<string, unknown>> {
  const { payload } = await jwtVerify(token, key);
  return payload as Record<string, unknown>;
}
