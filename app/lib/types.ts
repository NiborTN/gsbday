export interface ContentType {
  CUTE_SHORT_MESSAGE: string
  FUNNY_MESSAGE: string
  ROMANTIC_MESSAGE: string
  EMOTIONAL_MESSAGE: string
  SPECIAL_REVEAL_MESSAGE: string
  SURPRISE_MESSAGE: string
  FINAL_MESSAGE: string
  REASONS: string[]
  AUDIO_FILE_URL: string
  PHOTOS: string[]
}

export type AvatarAnimation = 
  | 'fly-in' 
  | 'wave' 
  | 'playful' 
  | 'glide' 
  | 'sit' 
  | 'listen' 
  | 'final-flight' 
  | 'goodbye'

export type AvatarPosition = 'left' | 'center' | 'right'

export type AvatarSize = 'sm' | 'md' | 'lg'

export type ScrollDirection = 'up' | 'down' | 'left' | 'right'