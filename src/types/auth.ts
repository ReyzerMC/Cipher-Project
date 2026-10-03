export interface AuthUser {
  id: number;
  username: string;
  email: string;
  role: string;
  created_at: number;
  avatar_key: string | null;
  avatar_url: string | null;
}
