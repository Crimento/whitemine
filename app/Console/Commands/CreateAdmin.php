<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class CreateAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create new user with admin rights';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $username = null;
        while (true) {
            $username = $this->ask('Enter username');
            if (User::where('username', $username)->exists()) {
                $this->error('User ' . $username . ' already exists!');
            } else {
                break;
            }
        }
        $password = $this->secret('Enter password');
        User::create([
            'username' => $username,
            'password' => Hash::make($password),
            'uuid' => Str::uuid(),
            'is_admin' => true,
        ]);
        $this->info('User ' . $username . ' was successfully created with admin rights!');
        return 0;
    }
}
