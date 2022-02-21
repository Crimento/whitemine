<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hwids', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->binary('publickey');
            $table->string('hwDiskId')->nullable();
            $table->string('baseboardSerialNumber')->nullable();
            $table->string('graphicCard')->nullable();
            $table->binary('displayId');
            $table->integer('bitness')->nullable();
            $table->bigInteger('totalMemory')->nullable();
            $table->integer('logicalProcessors')->nullable();
            $table->integer('physicalProcessors')->nullable();
            $table->bigInteger('processorMaxFreq')->nullable();
            $table->boolean('battery')->default(0);
            $table->boolean('banned')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hwids');
    }
};
