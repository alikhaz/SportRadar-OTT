<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthorPostRequest;
use App\Http\Resources\AuthorResource;
use App\Http\Resources\AuthorResourceCollection;
use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Display list of Authors.
     *
     * @return \App\Models\Author[]
     */
    public function index()
    {
        return new AuthorResourceCollection(Author::all());
    }

    /**
     * Store a new Author record in DB.
     *
     * @param  App\Http\Requests\AuthorPostRequest $request
     * @return \App\Models\Author
     */
    public function store(AuthorPostRequest $request)
    {
        return new AuthorResource(Author::create($request->all()));
    }

    /**
     * Find and return an Author record by its id.
     *
     * @param  \App\Models\Author\id  $id
     * @return \App\Models\Author
     */
    public function show(int $id)
    {
        return new AuthorResource(Author::find($id));
    }

    /**
     * Update an Author found by its id.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Author\id  $id
     * @return \App\Models\Author
     */
    public function update(Request $request, int $id)
    {
        $author = Author::findOrFail($id);
        $author->update($request->all());
        return new AuthorResource($author);
    }

    /**
     * Remove an Author record from DB.
     *
     * @param  \App\Models\Author\id  $id
     * @return boolean
     */
    public function destroy(int $id)
    {
        $author = Author::findOrFail($id);
        return $author->delete();
    }
}
