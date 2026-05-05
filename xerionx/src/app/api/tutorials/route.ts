import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Tutorial from '@/models/Tutorial';

export async function GET() {
  try {
    await dbConnect();
    const tutorials = await Tutorial.find({}).sort({ createdAt: -1 });
    return NextResponse.json(tutorials);
  } catch (error) {
    console.error('Error fetching tutorials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tutorials' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const tutorial = await Tutorial.create(body);
    return NextResponse.json(tutorial, { status: 201 });
  } catch (error) {
    console.error('Error creating tutorial:', error);
    return NextResponse.json(
      { error: 'Failed to create tutorial' },
      { status: 500 }
    );
  }
}
