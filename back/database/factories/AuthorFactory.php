<?php

namespace Database\Factories;

use App\Models\Author;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Model;

class AuthorFactory extends Factory
{
    /**
     * Factory for Author.
     *
     * @var string
     */
    protected $model = Author::class;

    /**
     * Author's factory definition
     *
     * @return array
     */
    public function definition()
    {
        return [
            'first_name' => $this->faker->name(),
            'last_name' => $this->faker->name(),
            'age' => $this->faker->numberBetween(15, 80),
            'address' => $this->faker->streetAddress
        ];
    }
}
