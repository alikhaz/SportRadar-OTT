<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Database\Seeders\AuthorSeeder;
use Tests\TestCase;

class BooksTest extends TestCase
{
    /**
     * get Books API test.
     *
     * @return void
     */
    public function test_get_books()
    {
        $this->seed();
        $this->getJson('/api/books')->assertJson(
            fn (AssertableJson $json) =>
            $json->has('data', 30)->has('data.0', fn ($json) => $json->has('id')->has('name')->has('release_date')->has('author_id')->etc())
        );
    }

    /**
     * get one Book by id API test.
     *
     * @return void
     */
    public function test_get_book()
    {
        $this->seed();
        $this->getJson('/api/books/5')->assertJson(
            fn (AssertableJson $json) =>
            $json->has('data', fn ($json) => $json->has('id')->has('name')->has('release_date')->has('author_id')->etc())
        );
    }

    /**
     * get delete Book by id API test.
     *
     * @return void
     */
    public function test_delete_book()
    {
        $this->seed();
        $response = $this->deleteJson('/api/books/3');
        $response->assertOk();
    }

    /**
     * get update Book by id API test.
     *
     * @return void
     */
    public function test_update_book()
    {
        $this->seed();
        $data = ['name' => 'Book Name'];
        $response = $this->putJson('/api/books/3', $data);
        $response->assertJson(fn ($json) => $json->has('data', fn ($json) => $json->where('name', $data['name'])->etc()));
    }
}
