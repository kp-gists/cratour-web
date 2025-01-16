import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ message: 'Selam' });
  } catch (error) {
    console.log('🚀 ~ GET ~ error:', error);
    return NextResponse.json({ error });
  }
}
