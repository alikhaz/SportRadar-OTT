<?php

namespace Database\Factories;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    /**
     * Factory for Book.
     *
     * @var string
     */
    protected $model = Book::class;

    /**
     * Book's factory definition.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->sentence(4),
            'release_date' => $this->faker->dateTime('now'),
            'author_id' =>  $this->faker->numberBetween(1, 10) // Use Author::factory() if new books need to be generetad on every seed
        ];
    }
}
