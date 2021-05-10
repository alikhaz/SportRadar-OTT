<?php

namespace App\Http\Controllers;

use App\Http\Requests\BooksPostRequest;
use App\Http\Resources\BookResource;
use App\Http\Resources\BookResourceCollection;
use App\Models\Author;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \App\Models\Book[]
     */
    public function index()
    {
        return new BookResourceCollection(
            Book::all()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\BooksPostRequest  $request
     * @return \App\Models\Book
     */
    public function store(BooksPostRequest $request)
    {
        Author::findOrFail($request->author_id);
        return new BookResource(Book::create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book\id  $id
     * @return \App\Models\Book
     */
    public function show(int $id)
    {
        return new BookResource(Book::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book\id  $id
     * @return \App\Models\Book
     */
    public function update(Request $request, int $id)
    {
        if ($request->author_id) Author::findOrFail($request->author_id);
        $book = Book::findOrFail($id);
        $book->update($request->all());
        return new BookResource($book);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book\id  $id
     * @return boolean
     */
    public function destroy(int $id)
    {
        $book = Book::findOrFail($id);
        return $book->delete($id);
    }
}
