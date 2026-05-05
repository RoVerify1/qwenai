import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Tutorial from '@/models/Tutorial';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const body = await request.json();
    const tutorial = await Tutorial.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    if (!tutorial) {
      return NextResponse.json({ error: 'Tutorial not found' }, { status: 404 });
    }
    return NextResponse.json(tutorial);
  } catch (error) {
    console.error('Error updating tutorial:', error);
    return NextResponse.json(
      { error: 'Failed to update tutorial' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const tutorial = await Tutorial.findByIdAndDelete(params.id);
    if (!tutorial) {
      return NextResponse.json({ error: 'Tutorial not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Tutorial deleted successfully' });
  } catch (error) {
    console.error('Error deleting tutorial:', error);
    return NextResponse.json(
      { error: 'Failed to delete tutorial' },
      { status: 500 }
    );
  }
}
