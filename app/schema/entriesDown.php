<?php
/**
 * Alias for database ORM
 */
use Illuminate\Database\Capsule\Manager as DB;

DB::schema()->drop('entries');
echo "deleted";