<?php
require_once '../lib/Repository.php';

class UserRepository extends Repository
{
    protected $tableName = 'user';

    public function create($firstName, $lastName, $email, $password)
    {
        $password = sha1($password);
        $query = "INSERT INTO $this->tableName (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
        $statement = ConnectionHandler::getConnection()->prepare($query);
        $statement->bind_param('ssss', $firstName, $lastName, $email, $password);
        if (!$statement->execute()) {
            throw new Exception($statement->error);
        }
        return $statement->insert_id;
    }
}
