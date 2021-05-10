<?php

namespace Tests\Feature;

use App\Models\Author;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Database\Seeders\AuthorSeeder;
use Tests\TestCase;

class AuthorsTest extends TestCase
{
    /**
     * @test
     * get Authors API test.
     *
     * @return void
     */
    public function test_get_authors()
    {
        $this->seed();
        $this->getJson('/api/authors')->assertJson(
            fn (AssertableJson $json) =>
            $json->has('data', 10)->has('data.0', fn ($json) => $json->has('first_name')->has('last_name')->has('age')->has('address')->etc())
        );
    }

    /**
     * get one Author by id API test.
     *
     * @return void
     */
    public function test_get_author()
    {
        $this->seed();
        $this->getJson('/api/authors/5')->assertJson(
            fn (AssertableJson $json) =>
            $json->has('data', fn ($json) => $json->has('first_name')->has('last_name')->has('age')->has('address')->etc())
        );
    }

    /**
     * get delete Author by id API test.
     *
     * @return void
     */
    public function test_delete_author()
    {
        $this->seed();
        $response = $this->deleteJson('/api/authors/3');
        $response->assertOk();
    }

    /**
     * get update Author by id API test.
     *
     * @return void
     */
    public function test_update_author()
    {
        $this->seed();
        $data =  ['first_name' => 'firstName'];
        $response = $this->putJson('/api/authors/3', $data);
        $response->assertJson(fn ($json) => $json->has('data', fn ($json) => $json->where('first_name', 'firstName')->etc()));
    }
}
